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

export function getRandomInt(min = 0, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
