var ELE_FACTORS = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];

function calculateNodeHeight(node) {
  var hiddenEle = getHiddenEle();
  var value = node.value;
  var placeholder = node.placeholder;
  var style = window.getComputedStyle(node);
  ELE_FACTORS.forEach(function (key) {
    hiddenEle.style[key] = style.getPropertyValue(key);
  });
  hiddenEle.value = value || placeholder || "";
  var height = hiddenEle.scrollHeight;
  hiddenEle.value = "";
  return height;
}

function getHiddenEle() {
  var hiddenEle = document.querySelector(".xue-ui-hidden-textarea");

  if (hiddenEle) {
    return hiddenEle;
  } else {
    var textarea = document.createElement("textarea");
    textarea.className = "xue-ui-hidden-textarea";
    document.body.append(textarea);
    return textarea;
  }
}

export default calculateNodeHeight;