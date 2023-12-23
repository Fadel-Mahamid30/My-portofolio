const firstSentence = (text) => {
  const firstSentence = text.split(" ");
  return firstSentence[0];
};

const lastSentence = (text) => {
  const sentence = text.split(" ");
  const lastSentence = sentence.slice(1);
  const combinetString = lastSentence.join(" ");
  return combinetString;
};

export default {firstSentence, lastSentence};