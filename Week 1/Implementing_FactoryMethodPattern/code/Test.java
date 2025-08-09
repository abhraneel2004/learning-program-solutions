interface Document{
    void open();
    void save();
}
 
class WordDocument implements Document{
    @Override
    public void open() {
        System.out.println("opening word document");
    }

    @Override
    public void save(){
        System.out.println("saving word document");
    }
} 
  
class PdfDocument implements Document{
    @Override
    public void open() {
        System.out.println("opening PDF document");
    } 

    @Override
    public void save(){
        System.out.println("saving PDF document");
    }
}
 
class ExcelDocument implements Document{
    @Override
    public void open() {
        System.out.println("opening Excel document");
    }

    @Override
    public void save(){
        System.out.println("saving Excel document");
    }
}

abstract class DocumentFactory{
    public abstract Document createDocument();
}

class WordDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
}

class  ExcelDocumentFactory extends DocumentFactory{
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
}
public class Test {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        Document word = wordFactory.createDocument();
        word.open();
        word.save();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document  pdf = pdfFactory.createDocument();
        pdf.open();
        pdf.save();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
        excel.save();

    }
}


// Abhraneel week 1