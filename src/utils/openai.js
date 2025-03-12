import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  organization: "org-r72AicGkrGNq0s9Zx1LawJaV",
  apiKey: "Bearer" + process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
