const res = document.getElementById("result");

        function calculate(value) {
            const calculatedValue = eval(value || null);
            if (isNaN(calculatedValue)) {
                res.value = "Error";
                setTimeout(() => {
                res.value = "";
                }, 1300);
            } else {
                res.value = calculatedValue;
             }
            }

        function oNdisplay(enteredValue) {
            if (!res.value) {
                res.value = "";
            }
                res.value += enteredValue;
            }