import User from '../model/User';

const BASE_URL = 'http://localhost:9000';

class userService {
  async sendUser(data) {
    try {
      const { id, name, email, picture, phoneNumber } = data;
      const user = new User(id, name, email, picture, phoneNumber);

      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        const responseData = await response.json();
        return responseData;
      } else if (response.status === 400) {
        throw new Error("Bad request");
      } else if (response.status === 404) {
        throw new Error("Not found");
      } else if (response.status === 500) {
        throw new Error("Internal server error");
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      throw error;
    }
  }

}
export default new userService();
