public class Ex2 {

    public static void main(String[] args) {

        // Creating a Word Document
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();

        // Creating a PDF Document
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        // Creating an Excel Document
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}

// Step 1: Document Interface
interface Document {
    void open();
}

// Step 2: Concrete Document Classes
class WordDocument implements Document {

    public void open() {
        System.out.println("Word Document Opened.");
    }
}

class PdfDocument implements Document {

    public void open() {
        System.out.println("PDF Document Opened.");
    }
}

class ExcelDocument implements Document {

    public void open() {
        System.out.println("Excel Document Opened.");
    }
}

// Step 3: Abstract Factory
abstract class DocumentFactory {

    public abstract Document createDocument();
}

// Step 4: Concrete Factories
class WordDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        return new ExcelDocument();
    }
}