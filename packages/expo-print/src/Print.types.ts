// @needsAudit
export type PrintOptions = {
  /**
   * URI of a PDF file to print. Remote, local (ex. selected via `DocumentPicker`) or base64 data URI
   * starting with `data:application/pdf;base64,`. This only supports PDF, not other types of
   * document (e.g. images). **Available on Android and iOS only.**
   */
  uri?: string;
  /**
   * HTML string to print. **Available on Android and iOS only.**
   */
  html?: string;
  /**
   * Width of the single page in pixels. Defaults to `612` which is a width of US Letter paper
   * format with 72 PPI. **Available only with `html` option.**
   */
  width?: number;
  /**
   * Height of the single page in pixels. Defaults to `792` which is a height of US Letter paper
   * format with 72 PPI. **Available only with `html` option.**
   */
  height?: number;
  /**
   * URL of the printer to use. Returned from `selectPrinterAsync`. **Available on iOS only.**
   */
  printerUrl?: string;
  /**
   * **Available on iOS only.** Alternative to `html` option that uses [UIMarkupTextPrintFormatter](https://developer.apple.com/documentation/uikit/uimarkuptextprintformatter)
   * instead of WebView, but it doesn't display images. Might be removed in the future releases.
   */
  markupFormatterIOS?: string;
  /**
   * **Available on iOS only.** The orientation of the printed content, `Print.Orientation.portrait`
   * or `Print.Orientation.landscape`.
   */
  orientation?: OrientationType['portrait'] | OrientationType['landscape'];
};

// @needsAudit
export type Printer = {
  /**
   * Name of the printer.
   */
  name: string;
  /**
   * URL of the printer.
   */
  url: string;
};

// @needsAudit
/**
 * The possible values of orientation for the printed content.
 */
export interface OrientationType {
  portrait: string;
  landscape: string;
}

// @docsMissing
export type FilePrintOptions = {
  /**
   * HTML string to print into PDF file.
   */
  html?: string;
  /**
   * **Available on iOS only.** Alternative to default option that uses [UIMarkupTextPrintFormatter](https://developer.apple.com/documentation/uikit/uimarkuptextprintformatter)
   * instead of WebView, but it doesn't display images.
   */
  markupFormatterIOS?: boolean;
  /**
   * Width of the single page in pixels. Defaults to `612` which is a width of US Letter paper
   * format with 72 PPI.
   */
  width?: number;
  /**
   * Height of the single page in pixels. Defaults to `792` which is a height of US Letter paper
   * format with 72 PPI.
   */
  height?: number;
  /**
   * Padding for the printed document.
   */
  padding?: FilePrintPadding;
  /**
   * Whether to include base64 encoded string of the file in the returned object.
   */
  base64?: boolean;
};

// @needsAudit
export type FilePrintPadding = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

// @needsAudit
export type FilePrintResult = {
  /**
   * A URI to the printed PDF file.
   */
  uri: string;
  /**
   * Number of pages that were needed to render given content.
   */
  numberOfPages: number;
  /**
   * Base64 encoded string containing the data of the PDF file. **Available only if `base64`
   * option is truthy**. It doesn't include data URI prefix `data:application/pdf;base64,`.
   */
  base64?: string;
};
