def kare_al(sayi):
    """Bir sayının karesini döndürür."""
    return sayi ** 2

print(kare_al(10))


def sicaklik(derece):
    if derece>=20:
        print("Hava sıcat!!!")
    else:
        print("Hava soğut!!!")
        
derece=int(input("bir sıcaklık derecesi  giriniz: "))
sicaklik(derece)