const DUMMY_ACTION='DUMMY_ACTION';

export default function reducer(state={}, action={} ) {
    switch (action.type){
        default:
        return state;
    }
}

export function dummy(){
    return {type: DUMMY_ACTION};
}

