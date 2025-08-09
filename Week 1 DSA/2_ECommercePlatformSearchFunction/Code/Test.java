import java.util.Scanner;

class Product{
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category){
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    void showProducts(Product pr[]){

    }
}

class ProductSearch{
    public static void linearSearch(Product[] pr,int key){
        for(int i=0;i<pr.length;i++){
            if((pr[i].productId)==key){
                System.out.println(pr[i].productId+" found at index "+i);
                System.out.println("Item Id -> " + pr[i].productId + "Item Name -> " + pr[i].productName + "category -> " + pr[i].category);
                return;
            }
        }
        System.out.println(key + " not found");
        return;
    }
    public static void sort(Product[] pr){
        for (int i = 0; i < pr.length - 1; i++){
            for (int j = 0; j < pr.length - i - 1; j++){
                if (pr[j].productId > pr[j+1].productId){
                    Product temp = pr[j];
                    pr[j] = pr[j+1];
                    pr[j+1] = temp;
                }
            }
        }
    }
    public static void binarySearch(Product[] pr,int key){
        sort(pr);
        int low = 0;
        int high = pr.length-1;
        while(low <= high){
            int mid = (low + high)/2;
            if(pr[mid].productId == key){
                System.out.println(key+" found at index "+mid);
                System.out.println("Item Id -> " + pr[mid].productId + "Item Name -> " + pr[mid].productName + "category -> " + pr[mid].category);
                return;
            }
            else if(key<pr[mid].productId){
                high = mid-1;
            }
            else if(key>pr[mid].productId){
                low = mid + 1;
            }
        }
        System.err.println(key + " not found");
    }
}

public class Test{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        Product[] pr ={
            new Product(101, "Mouse", "Electronics"),
            new Product(205, "Notebook", "Stationary"),
            new Product(150, "Keyboard", "Electronics"),
            new Product(400, "Pen", "Stationary")
        };
        System.out.println("Enter a product id to search : ");
        int id1 = sc.nextInt();
        System.out.println("Using Linear Search");
        ProductSearch.linearSearch(pr,id1);
        
        System.out.println("Enter a product id to search : ");
        int id2 = sc.nextInt();
        System.out.println("Using Bianry Search");
        ProductSearch.binarySearch(pr,id2);
        sc.close();
    }
}

// Abhraneel week 1
