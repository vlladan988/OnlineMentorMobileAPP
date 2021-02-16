const cutText = (text, from, to) => text.substring(from, to);

export const CutTextLength = (text, numLength) => {
  if (text.length > numLength) {
    return cutText(text, 0, numLength) + '...';
  } else {
    return text;
  }
};
