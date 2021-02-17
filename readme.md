On a besoin d’une fonction capable de valider le numéro de compte au moyen d’une somme de contrôle.

Le numéro de compte est une chaîne de caractères composée de 9 chiffres : c1, c2, c3, c4, c5, c6, c7, c8, c9.
Un numéro de compte est dit valide si sa somme de contrôle est un multiple de 11.
La somme de contrôle est calculée comme suit :
(c1*9 + c2*8 + c3*7 + c4*6 + c5*5 + c6*4 + c7*3 + c8 * 2 + c9).
Voici des exemples de numéros de compte valides :

000000000 : 0 modulo 11 = 0 
130000000 : 1 * 9 + 3 * 8 = 33, 33 modulo 11 = 0
000000051
123456789
490867715
999999990
