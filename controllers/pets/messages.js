const NOT_VALID_ID =
  "ID is not valid for MongoDB documents, please enter correct 'petId' -> [ .../api/pets/{:petsId} ]";
const MISSING_FIELD = field => `Missing field: { "${field}" }`;
const NOT_FOUND_PET_FOR_UPDATE = 'Not fount pet for upadete';
const FOUNDED_DATA = 'All results on your request';
const NOT_FOUND_PET = 'Not found pet on your request';
const DELETE_PET_SUCCESS = 'Pet deleted successfully';

module.exports = {
  NOT_VALID_ID,
  MISSING_FIELD,
  NOT_FOUND_PET_FOR_UPDATE,
  FOUNDED_DATA,
  NOT_FOUND_PET,
  DELETE_PET_SUCCESS,
};
