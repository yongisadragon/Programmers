function solution(my_string) {
            const one = my_string.match(/[^aeiou]/g)??[]
            return one.join('');
}