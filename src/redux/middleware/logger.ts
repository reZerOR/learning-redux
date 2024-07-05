const logger = (state)=>(next)=>(action)=>{
console.log('current State =>', state.getState());
console.log('Action =>', action);
next(action)
console.log('current state+>', state.getState());


    
}
export default logger;
