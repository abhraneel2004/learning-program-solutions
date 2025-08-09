class Computer {
    public String cpu;
    public String ram;
    public String storage;

    public Computer(Builder builder){
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
    }

    static class Builder{
        public String cpu;
        public String ram;
        public String storage;

        public Builder setCpu(String cpu) {
            this.cpu = cpu;
            return this;
        }
        public Builder setRam(String ram) {
            this.ram = ram;
            return this;
        }
        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Computer build(){
            return new Computer(this);
        }
    }
    @Override
    public String toString() {
        return "Computer [CPU: " + cpu + ", RAM: " + ram + ", Storage: " + storage + "]";
    }
}

public class Test{
    public static void main(String[] args) {
        Computer computer = new Computer.Builder()
                .setCpu("Ryzen 5")
                .setRam("16 GB")
                .setStorage("512 GB SSD")
                .build();
        if (computer == null){
            System.out.println("Computer build failed");
        }
        else{
            System.out.println(computer.toString());
        }
    }
}


// Abhraneel week 1