import types from "../../types.json";
import api from "../../data.json";

export function CheckType(text: string) {
  const __types = [];
  for (const _type of types) {
    if (api.class_names.includes(text)) {
        __types.push({'name': text, is_external: false, link: `#${text}`})
    }
    if (text === _type.name) {
      __types.push(_type);
    } else {
      continue;
    }
  }
  return __types.length === 0
    ? [{ name: text, is_external: false, link: `#${text}` }]
    : __types;
}


/**
 * Optional[str]
 * Optional = Link
 * str = Link
 * \[\]
 */