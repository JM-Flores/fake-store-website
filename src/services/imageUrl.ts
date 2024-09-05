const getImageUrl = (url: string) => {
    return url.match(/https?:\/\/[^\s"]+/)?.[0];
}

export default getImageUrl;