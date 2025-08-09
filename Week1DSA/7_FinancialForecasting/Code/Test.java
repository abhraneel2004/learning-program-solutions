//FV(n)​=FV(n−1)​×(1+r)

import java.util.Scanner;

class Forecast {
    public double forecastValue(double initialValue, double growthRate, int years) {
        // Base case
        if (years == 0) {
            return initialValue;
        }

        // Recursive step
        return forecastValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }
}

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter initial amount : ");
        double iAmt = sc.nextDouble();
        System.out.print("Enter growth rate : ");
        double gRt = sc.nextDouble();
        System.out.print("Enter number of years : ");
        int n = sc.nextInt();
        Forecast f = new Forecast();
        double d = f.forecastValue(iAmt, gRt / 100, n);
        System.out.println("Future value after " + n + " years = " + d);
        sc.close();
    }
}

// Abhraneel week1