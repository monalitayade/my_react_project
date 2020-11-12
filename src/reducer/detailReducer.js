import {
  ADD_DETAIL,
  GET_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL
} from "../constant/types";



const initialState = {
  contacts:[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
  ],
  contact: null,
};

export const detailReducer = (state = initialState, action)=> {
    switch(action.type) {
    case ADD_DETAIL:
        return{
            contacts: [action.payload, ...state.contacts]
        };
        
    case GET_DETAIL:
      let arr = state.contacts.filter((contact) => contact.id == action.payload);
        arr = arr.values(); 
        for(let val of arr){
          arr = val;
        }
        return{
            ...state,
            contact: arr,
        };

    case UPDATE_DETAIL:
      return{
        ...state,
        contact:state.contacts.map((contact) => 
            contact.id == action.payload.id ? action.payload : contact
        )
      };

    case DELETE_DETAIL:
      return{
          ...state,
          contacts:state.contacts.filter((contact) => 
              contact.id != action.payload
          ),
      };
    default:
    return state;
    }
}