export const CONTENTS_PER_PAGE = 5;

export const pageNumberToQueryConverter = (targetPage: number) => {
    const offset = (targetPage - 1) * CONTENTS_PER_PAGE;
    return {
        offset,
        limit: CONTENTS_PER_PAGE
    }

}