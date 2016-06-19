import store from '../store';

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || !entity[relation]) return []

    return relStore.filter((relEntity) => entity[relation].includes(relEntity.id))
}

export function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
}

export function guid() {
  function r() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r();
}