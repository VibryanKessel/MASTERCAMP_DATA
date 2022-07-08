export default ( str ) => (str.length <= 25)? str : str.slice(0,21)+'...'
