import "react";

/**
 * Behold's embed is the <behold-widget feed-id="..."> custom element.
 * https://behold.so/docs/widget/
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "feed-id": string;
      };
    }
  }
}
