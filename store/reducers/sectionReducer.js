import  sections  from '../../constants/data/sections';


const initialState = { 
    sections: sections,
    selected: null
}

function SectionReducer(state=initialState, action){
    return state
}

export default SectionReducer;