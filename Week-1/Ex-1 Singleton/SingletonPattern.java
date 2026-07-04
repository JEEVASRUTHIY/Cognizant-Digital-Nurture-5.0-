
class Logger{
    private static Logger instance=new Logger();
    private Logger(){
        System.out.println("Logger object created");
    }
    public static Logger getInstance(){
         return instance;
    }
    public void log(String message){
        System.out.println("LOG: "+message);
    }
}
public class SingletonPattern {
    public static void main(String[] args){
        Logger logger1=Logger.getInstance();
        Logger logger2=Logger.getInstance();
        logger1.log("Application started");
        logger2.log("User Logged In");

        System.out.println(logger1==logger2);
    }
}
