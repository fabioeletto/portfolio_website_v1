function isNullOrEmpty(text)
{
    return text == null || text.trim() === '';
}

module.exports = {isNullOrEmpty}