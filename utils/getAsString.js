export default function getAsString(value) {
    if(Array.isArray(value)){
        return value[0]
    }

    return value
}