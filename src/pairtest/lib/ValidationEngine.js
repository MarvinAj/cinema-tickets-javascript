import { Engine } from 'json-rules-engine';

const validationEngine = (rules) => {
  const engine = new Engine();

  rules.map((x) => engine.addRule(x));

  return engine;
};

export default validationEngine;
