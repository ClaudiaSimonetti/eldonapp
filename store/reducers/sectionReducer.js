import  sections  from '../../constants/data/sections';
import sectionType from '../types/section.types';
import { SelectSection } from '../actions/sectionAction';

const {SELECT_CATEGORY}= sectionType;

const initialState = { 
    sections: sections,
    selected: null,
}
console.warn('soy initialState', initialState)

function SectionReducer(state=initialState, action){
    console.warn('entro por section reducer', state, action)
    // return state
    switch(action.type){
        case SELECT_CATEGORY:
            const indexCategory = state.sections.findIndex((category)=> category.id === action.sectionId);
            console.log('soy indexCategory', indexCategory)
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