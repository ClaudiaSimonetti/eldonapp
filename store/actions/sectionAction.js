import sectionType from "../types/section.types";

const { SELECT_CATEGORY } = sectionType 

export const SelectSection = (id) => ({
    type: SELECT_CATEGORY,
    sectionId: id
    
})


