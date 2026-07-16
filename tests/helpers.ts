import type { Page, Request } from "@playwright/test";

export const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/b-notes/djdmbmibfjjmgoacidjlnholckcaplli";

export type PageIssues = {
  pageErrors: string[];
  consoleErrors: string[];
  failedFirstPartyRequests: string[];
};

/**
 * Collect uncaught page errors, console errors, and failed first-party requests.
 * External-host failures are excluded here and documented separately per the QA spec.
 */
export function collectPageIssues(page: Page): PageIssues {
  const issues: PageIssues = {
    pageErrors: [],
    consoleErrors: [],
    failedFirstPartyRequests: [],
  };

  page.on("pageerror", (error) => {
    issues.pageErrors.push(error.message);
  });

  page.on("console", (message) => {
    if (message.type() === "error") {
      issues.consoleErrors.push(message.text());
    }
  });

  const isFirstParty = (request: Request) => {
    try {
      const url = new URL(request.url());
      return url.hostname === "localhost" || url.hostname === "127.0.0.1";
    } catch {
      return false;
    }
  };

  page.on("requestfailed", (request) => {
    if (isFirstParty(request)) {
      issues.failedFirstPartyRequests.push(
        `${request.url()} — ${request.failure()?.errorText ?? "unknown"}`,
      );
    }
  });

  page.on("response", (response) => {
    if (response.status() >= 400 && isFirstParty(response.request())) {
      issues.failedFirstPartyRequests.push(
        `${response.url()} — HTTP ${response.status()}`,
      );
    }
  });

  return issues;
}

/** React hydration failures surface as console errors mentioning "hydrat". */
export function hydrationErrors(issues: PageIssues): string[] {
  return [...issues.consoleErrors, ...issues.pageErrors].filter((text) =>
    /hydrat/i.test(text),
  );
}
