class PreferenceUpdateRequest {
    constructor(userId, productId) {
        this.preference = this.addProductToPreference(userId, productId);
    }


    addProductToPreference(userId, productId) {
        return {
            "id": userId,
            "idProduct": productId
        }
    }



}
export default PreferenceUpdateRequest;