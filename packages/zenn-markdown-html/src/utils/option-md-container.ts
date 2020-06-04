import { escapeHtml } from "./md-base";
// containers
// ref: https://github.com/markdown-it/markdown-it-container

// ::: details Detail
//   summary comes here
// :::
export const mdContainerDetails = {
  validate: function (params: string) {
    return params.trim().match(/^details\s+(.*)$/);
  },
  render: function (tokens: any[], idx: number) {
    const m = tokens[idx].info.trim().match(/^details\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return "<details><summary>" + escapeHtml(m[1]) + "</summary>\n";
    } else {
      // closing tag
      return "</details>\n";
    }
  },
};
// ::: message alert
//   text
// :::
export const mdContainerMessage = {
  validate: function (params: string) {
    return params.trim().match(/^msg\s+(.*)$/);
  },
  render: function (tokens: any[], idx: number) {
    const m = tokens[idx].info.trim().match(/^msg\s+(.*)$/);
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="msg ' + escapeHtml(m[1]) + '">';
    } else {
      // closing tag
      return "</div>\n";
    }
  },
};