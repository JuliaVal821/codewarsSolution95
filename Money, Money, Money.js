https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

    function calculateYears(principal, percent, tax, desired) {
        let year = 0;
        while(principal < desired){
            principal = principal + (principal * percent)  - tax * principal * percent;
            year++;
        }
        return year;
    }