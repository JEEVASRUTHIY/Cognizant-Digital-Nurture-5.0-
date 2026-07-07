import java.util.ArrayList;
import java.util.List;

public class Ex7 {

    public static void main(String[] args) {

        // Create Stock Market
        StockMarket stockMarket = new StockMarket();

        // Create Observers
        Observer mobile = new MobileApp();
        Observer web = new WebApp();

        // Register Observers
        stockMarket.registerObserver(mobile);
        stockMarket.registerObserver(web);

        // Change stock price
        stockMarket.setStockPrice(2500);

        System.out.println();

        // Remove one observer
        stockMarket.deregisterObserver(web);

        // Change stock price again
        stockMarket.setStockPrice(2700);
    }
}

// Subject Interface
interface Stock {

    void registerObserver(Observer observer);

    void deregisterObserver(Observer observer);

    void notifyObservers();
}

// Concrete Subject
class StockMarket implements Stock {

    private List<Observer> observers = new ArrayList<>();
    private double stockPrice;

    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void deregisterObserver(Observer observer) {
        observers.remove(observer);
    }

    @Override
    public void notifyObservers() {

        for (Observer observer : observers) {
            observer.update(stockPrice);
        }
    }

    public void setStockPrice(double price) {
        this.stockPrice = price;
        System.out.println("Stock Price Updated to: Rs." + price);
        notifyObservers();
    }
}

// Observer Interface
interface Observer {

    void update(double price);
}

// Concrete Observer - Mobile App
class MobileApp implements Observer {

    @Override
    public void update(double price) {
        System.out.println("Mobile App: Stock price is Rs." + price);
    }
}

// Concrete Observer - Web App
class WebApp implements Observer {

    @Override
    public void update(double price) {
        System.out.println("Web App: Stock price is Rs." + price);
    }
}