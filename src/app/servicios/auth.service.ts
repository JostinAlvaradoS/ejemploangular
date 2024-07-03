import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore, private router: Router) { }

  login(user: string, password: string) {
    this.firestore.collection('USUARIOS', ref => ref.where('user', '==', user).where('password', '==', password))
      .snapshotChanges()
      .subscribe(users => {
        if (users.length > 0) {
          this.router.navigate(['/home']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      });
  }


  agregarUsuarios() {
    const usuarios = [
      { user: 'ALEXAGUIRRE', password: '12345', name: 'ALEX FERNANDO AGUIRRE ROJAS', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JOSTINALVARADO', password: '12345', name: 'JOSTIN ENRIQUE ALVARADO SARMIENTO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'MIGUEALVAREZ', password: '12345', name: 'MIGUEL ALVAREZ LIMA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JORGEARMIJOS', password: '12345', name: 'JORGE ENRIQUE ARMIJOS CABRERA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'TAISBALCAZAR', password: '12345', name: 'TAIS BELEN BALCAZAR ALBAN', asignatura: 'B', rol: 'Estudiante' },
      { user: 'KEVINBUSTAMANTE', password: '12345', name: 'KEVIN JOEL BUSTAMANTE MONCAYO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'BYRONCASTILLO', password: '12345', name: 'BYRON JOSUE CASTILLO PALADINES', asignatura: 'B', rol: 'Estudiante' },
      { user: 'HERMINCHUQUIMARCA', password: '12345', name: 'HERMIN LEONARDO CHUQUIMARCA JARAMILLO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'ANACHURO', password: '12345', name: 'ANA CAROLINA CHURO BRICEÑO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'EDGARESPINOZA', password: '12345', name: 'EDGAR SANTIAGO ESPINOZA VELASQUEZ', asignatura: 'B', rol: 'Estudiante' },
      { user: 'PABLOFIGUEROA', password: '12345', name: 'PABLO ANDRES FIGUEROA JUCA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JEREMYJARAMILLO', password: '12345', name: 'JEREMY FABRICIO JARAMILLO PEÑA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'FELIPEJIMENEZ', password: '12345', name: 'FELIPE SEBASTIAN JIMENEZ VINAN', asignatura: 'B', rol: 'Estudiante' },
      { user: 'FREDDYLEON', password: '12345', name: 'FREDDY ARMANDO LEON ARIAS', asignatura: 'B', rol: 'Estudiante' },
      { user: 'CARLOSMOROCHO', password: '12345', name: 'CARLOS ENRIQUE MOROCHO CARRION', asignatura: 'B', rol: 'Estudiante' },
      { user: 'MILTONPAREDES', password: '12345', name: 'MILTON JAVIER PAREDES CASTRO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JOSUEPIEDRA', password: '12345', name: 'JOSUE SEBASTIAN PIEDRA LOPEZ', asignatura: 'B', rol: 'Estudiante' },
      { user: 'PABLORAMON', password: '12345', name: 'PABLO DAVID RAMON VASQUEZ', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JOSEMIGUELREGALADO', password: '12345', name: 'JOSE MIGUEL REGALADO VALAREZO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'PABLOREYES', password: '12345', name: 'PABLO JOSE REYES MOSQUERA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'CRISTIANRODRIGUEZ', password: '12345', name: 'CRISTIAN DAVID RODRIGUEZ SALCEDO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'AUDREYROMERO', password: '12345', name: 'AUDREY ELIZABETH ROMERO PELAEZ', asignatura: 'B', rol: 'Profesor Tutor' },
      { user: 'CARLOSSALAS', password: '12345', name: 'CARLOS AGUSTIN SALAS CHURO', asignatura: 'B', rol: 'Estudiante' },
      { user: 'MATEOVALAREZO', password: '12345', name: 'MATEO AGUSTIN VALAREZO OJEDA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'JEANVALAREZO', password: '12345', name: 'JEAN PAUL VALAREZO PUGLLA', asignatura: 'B', rol: 'Estudiante' },
      { user: 'VALERIAYUNGA', password: '12345', name: 'VALERIA ALEXANDRA YUNGA MANZANILLAS', asignatura: 'B', rol: 'Estudiante' },
    ];

    usuarios.forEach(usuario => {
      this.firestore.collection('USUARIOS').add(usuario)
        .then(docRef => {
          console.log('Usuario agregado con ID: ', docRef.id);
        })
        .catch(error => {
          console.error('Error al agregar usuario: ', error);
        });
    });
  }
}
