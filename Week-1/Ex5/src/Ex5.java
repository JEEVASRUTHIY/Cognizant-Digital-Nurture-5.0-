public class Ex5 {

    public static void main(String[] args) {

        // Email Notification
        Notifier email = new EmailNotifier();
        email.send();

        System.out.println();

        // Email + SMS Notification
        Notifier sms = new SMSNotifierDecorator(new EmailNotifier());
        sms.send();

        System.out.println();

        // Email + SMS + Slack Notification
        Notifier slack = new SlackNotifierDecorator(
                new SMSNotifierDecorator(
                        new EmailNotifier()));
        slack.send();
    }
}

// Component Interface
interface Notifier {
    void send();
}

// Concrete Component
class EmailNotifier implements Notifier {

    @Override
    public void send() {
        System.out.println("Sending notification via Email.");
    }
}

// Abstract Decorator
abstract class NotifierDecorator implements Notifier {

    protected Notifier notifier;

    public NotifierDecorator(Notifier notifier) {
        this.notifier = notifier;
    }
}

// Concrete Decorator - SMS
class SMSNotifierDecorator extends NotifierDecorator {

    public SMSNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send() {
        notifier.send();
        System.out.println("Sending notification via SMS.");
    }
}

// Concrete Decorator - Slack
class SlackNotifierDecorator extends NotifierDecorator {

    public SlackNotifierDecorator(Notifier notifier) {
        super(notifier);
    }

    @Override
    public void send() {
        notifier.send();
        System.out.println("Sending notification via Slack.");
    }
}