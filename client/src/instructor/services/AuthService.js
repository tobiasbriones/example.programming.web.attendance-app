/*
 * Copyright (c) 2020 Tobias Briones.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Api from '../../services/Api';

const endPoint = 'instructors/login.php';
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

export default {
  login(data) {
    const config = { headers: headers };
    
    return Api.post(endPoint, data, config);
  }
};
