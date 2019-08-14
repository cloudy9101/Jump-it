import { SUGAR_INTAKE, HIGH_BLOOD } from '../actiontypes';

initState = {
  low:'',
  high:'',
  value:''
  timestamp:''
};

const  measure = (state = initState, action) => {
  switch (action.type) {
    case HIGH_BLOOD: {
      return { ...initState, ...action.payload };
    }
    case SUGAR_INTAKE: {
      return { ...initState, ...action.payload };
    }
    default:
      return state;
  }
};
