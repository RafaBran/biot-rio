#include <stdio.h>
#include <locale.h>

int main() {
	
	setlocale(LC_ALL, "Portuguese");
	
    float processualN1, formalN1, notaN1, quantoFalta, processualN2, formalN2, notaN2, mediaFinal, notaN3, notaN4, notaAcumulada;
	
	printf("\n   *** CALCULADORA DE NOTAS UNIALFA *** ");
	printf("\n\n   ---------------- N1 ---------------- ");
    printf("\n   Informe sua nota processual de N1: ");
    scanf("%f", &processualN1);
    printf("   Informe sua nota formal de N1: ");
    scanf("%f", &formalN1);
	
    notaN1 = (formalN1 * 8 + processualN1 * 2) / 10;
	
    printf("   Sua nota final de N1 é: %.2f\n", notaN1);
    
    notaAcumulada = notaN1;
    quantoFalta = 16 - notaAcumulada;
	
	if ( quantoFalta > 10) {
		printf("\n   Atenção! Mesmo que tire nota 10 na N2\n   você não conseguirá passar direto, te-\n   rá que fazer a N3!");
	} else {
		printf("\n   Atenção! Você precisa tirar %.2f \n   na N2 para passar direto!", quantoFalta);
	}
    
    printf("\n\n   ---------------- N2 ---------------- ");
    printf("\n   Informe sua nota processual de N2: ");
    scanf("%f", &processualN2);
    printf("   Informe sua nota formal de N2: ");
    scanf("%f", &formalN2);
    
    notaN2 = (formalN2 * 8 + processualN2 * 2) / 10;
    
    printf("   Sua nota final de N2 é: %.2f\n", notaN2);
    
	mediaFinal = (notaN1 + notaN2) / 2;
	printf("\n   ------------- RESULTADO ------------ ");
    printf("\n   Sua média final de N1 e N2 é: %.2f", mediaFinal);
    
	notaAcumulada = notaAcumulada + notaN2;
	quantoFalta = 15 - notaAcumulada;
    
    if ( mediaFinal >= 8 ) {
    	printf ("\n   Você já está aprovado nessa matéria! ");
	} else if ( mediaFinal < 3 ) {
		printf ("   Você está reprovado por nota nesta matéria!");
	} else {
		printf ("\n   Você ainda não foi aprovado! ");
		printf ("\n   Você precisará fazer a prova de N3! ");
		
		if ( quantoFalta > 10) {
			printf("\n\n\n   Atenção! \nMesmo que tire nota 10\n   você não conseguirá passar de N3, te-\n   rá que fazer a N4!");
		} else {
			printf("\n\n   Atenção! Você precisa tirar %.1f \n   na N3 para passar na matéria!", quantoFalta);
			printf("\n\n   Atenção! Se tirar menos que 3 \n   será reprovado por nota!", quantoFalta);
		}
			
		printf("\n\n   ---------------- N3 ---------------- ");		
		printf("\n   Informe sua nota de N3: ");
	    scanf("%f", &notaN3);
	  	 
	    mediaFinal = (notaN1 + notaN2 + notaN3) / 3;
	    
	    printf("\n   Sua média final de N3 é: %.2f", mediaFinal);
	   	   
	    if ( mediaFinal >= 5 )
	    	printf ("\n   Você foi aprovado nessa matéria! ");
	    else if ( mediaFinal < 3 ) {
	    	printf ("\n   Você está reprovado por nota nesta matéria! ");
		} else {
			printf ("\n   Você ainda não foi aprovado! ");
			printf ("\n   Você precisará fazer a prova de N4! ");
			
			notaAcumulada = notaAcumulada + notaN3;
			quantoFalta = 20 - notaAcumulada;
		   
		    if ( quantoFalta > 10) {
			printf("\n\n\n   Atenção! \nMesmo que tire nota 10\n   você não conseguirá passar de N4, te-\n   você já está reprovado!");
			} else {
				printf("\n\n   Atenção! Você precisa tirar %.2f \n   na N4 para passar na matéria!", quantoFalta);
			}
		    			
			printf("\n\n   ---------------- N4 ---------------- ");		
			printf("\n   Informe sua nota processual de N4: ");
	    	scanf("%f", &notaN4);
	    	
	    	mediaFinal = ((notaN1 + notaN2 + notaN3) / 3 + notaN4) / 2;
	    	
	    	printf("\n   Sua média final de N4 é: %.2f", mediaFinal);
	    	 		    	
	    	if ( mediaFinal >= 5 ) {
	    		printf ("\n   Você foi aprovado nessa matéria! ");
			} else {
				printf ("\n   Você está reprovado por nota!");
			}
	    }
	}
	
    return 0;
}