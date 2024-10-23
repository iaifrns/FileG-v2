const fileSizeInKB = (size: number ) => {
    const kbSize = size/1000
    return String(Math.ceil(kbSize)+"KB")
}

export default fileSizeInKB