import QueryString from "qs";

const getLinkWithParams = (path: string, query: object) => {
    const parameterString = QueryString.stringify(query);

    return path + (parameterString ? `?${parameterString}` : "")
}

export default getLinkWithParams;