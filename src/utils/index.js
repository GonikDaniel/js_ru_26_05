import store from '../store';

export function getRelation(entity, relation) {
    const relStore = store.getState()[relation]
    if (!relStore || !entity[relation]) return []

    return relStore.filter((relEntity) => entity[relation].includes(relEntity.id))
}
