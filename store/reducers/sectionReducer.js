import  sections  from '../../constants/data/sections';
import sectionType from '../types/section.types';

const {SELECT_CATEGORY}= sectionType;

const initialState = { 
    sections: sections,
    selected: null,
}

function SectionReducer(state=initialState, action){
    switch(action.type){
        case SELECT_CATEGORY:
            const indexCategory = state.sections.findIndex((category)=> category.id === action.sectionId);
            if(indexCategory === -1)
                return state;
                return{
                ...state, 
                selected: state.sections[indexCategory]
                }
        default:
            return state;
    }
}

export default SectionReducer;