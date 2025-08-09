
class Logger {
    private static Logger logger;

    private Logger(){
        System.out.println("Logger instance created");
    }

    public static Logger getInstance(){
        if (logger == null) {
            logger = new Logger();
        }
        return logger;
    }

    public void printMessage(){
        System.out.println("Instance hashcode = "+logger.hashCode());
    }
}

public class Test{
    public static void main(String[] args){
        Logger l1 = Logger.getInstance();
        l1.printMessage();

        Logger l2 = Logger.getInstance();
        l2.printMessage();

        if (l1 == l2){
            System.out.println("Both instances are equal");
        }
        else{
            System.out.println("Both instances are not equal");
        }
    }
}


// Abhraneel week 1