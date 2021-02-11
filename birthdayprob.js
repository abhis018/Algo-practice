// Question(-answer will be only algorithm)

// Given a chocolate bar, two children, Lily and Ron, are determining how to share it. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let res = 0;
    let out = 0;
    if(s.length > 1){
       for(let i=0; i<s.length-1; i++){
            for(let j=0; j<m; j++){
                res += s[i+j];
            }
            if(res === d){
                out += 1;
            }
            res = 0;
        }
        return out; 
    }else {
        if(s[0] === d){
            out = 1;
        }
        return out; 
    }
}