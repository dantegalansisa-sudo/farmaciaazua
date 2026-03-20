import type { Product } from './types';

export const products: Product[] = [
  // MEDICAMENTOS
  {
    id: 'med-01', name: 'Acetaminofen 500mg', category: 'medicamentos', priceRange: 'RD$50-150', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['dolor', 'fiebre', 'analgesico'],
    dosage: '500mg - 1 tableta cada 6-8 horas', manufacturer: 'Laboratorio Nacional', activeIngredients: ['Acetaminofen'],
    indications: ['Dolor de cabeza', 'Fiebre', 'Dolor muscular', 'Dolor de muelas'],
    warnings: ['No exceder 4g diarios', 'Evitar con alcohol', 'Consultar medico si persiste mas de 3 dias'],
  },
  {
    id: 'med-02', name: 'Ibuprofeno 400mg', category: 'medicamentos', priceRange: 'RD$80-200', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['dolor', 'inflamacion', 'antiinflamatorio'],
    dosage: '400mg - 1 tableta cada 6-8 horas con alimentos', manufacturer: 'MedPharma RD', activeIngredients: ['Ibuprofeno'],
    indications: ['Dolor e inflamacion', 'Artritis', 'Dolor menstrual', 'Cefalea'],
    warnings: ['Tomar con alimentos', 'No usar con otros AINEs', 'Puede afectar el estomago'],
  },
  {
    id: 'med-03', name: 'Amoxicilina 500mg', category: 'medicamentos', priceRange: 'RD$150-350', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['antibiotico', 'infeccion'],
    dosage: '500mg - cada 8 horas por 7-10 dias', manufacturer: 'Laboratorio Rowe', activeIngredients: ['Amoxicilina trihidrato'],
    indications: ['Infecciones respiratorias', 'Infecciones urinarias', 'Infecciones de oido'],
    warnings: ['Completar tratamiento completo', 'Puede causar diarrea', 'Informar alergias a penicilina'],
    requiresPrescription: true,
  },
  {
    id: 'med-04', name: 'Omeprazol 20mg', category: 'medicamentos', priceRange: 'RD$100-250', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['estomago', 'gastritis', 'acidez'],
    dosage: '20mg - 1 capsula diaria en ayunas', manufacturer: 'Laboratorio Nacional', activeIngredients: ['Omeprazol'],
    indications: ['Gastritis', 'Reflujo gastroesofagico', 'Ulcera gastrica', 'Acidez estomacal'],
    warnings: ['Tomar 30 min antes del desayuno', 'No masticar la capsula', 'No usar por mas de 14 dias sin receta'],
  },
  {
    id: 'med-05', name: 'Loratadina 10mg', category: 'medicamentos', priceRange: 'RD$60-180', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['alergia', 'antihistaminico'],
    dosage: '10mg - 1 tableta diaria', manufacturer: 'MedPharma RD', activeIngredients: ['Loratadina'],
    indications: ['Rinitis alergica', 'Urticaria', 'Picazon nasal', 'Estornudos'],
    warnings: ['Puede causar somnolencia leve', 'Evitar si tiene enfermedad hepatica'],
  },
  {
    id: 'med-06', name: 'Metformina 850mg', category: 'medicamentos', priceRange: 'RD$120-300', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['diabetes', 'azucar'],
    dosage: '850mg - segun indicacion medica', manufacturer: 'Laboratorio Rowe', activeIngredients: ['Metformina clorhidrato'],
    indications: ['Diabetes tipo 2', 'Control de glucosa en sangre'],
    warnings: ['Tomar con alimentos', 'No consumir alcohol', 'Monitorear funcion renal periodicamente'],
    requiresPrescription: true,
  },
  {
    id: 'med-07', name: 'Losartan 50mg', category: 'medicamentos', priceRange: 'RD$150-350', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['presion', 'hipertension'],
    dosage: '50mg - 1 tableta diaria', manufacturer: 'Laboratorio Nacional', activeIngredients: ['Losartan potasico'],
    indications: ['Hipertension arterial', 'Proteccion renal en diabetes'],
    warnings: ['No usar en embarazo', 'Puede causar mareo', 'Monitorear presion regularmente'],
    requiresPrescription: true,
  },
  {
    id: 'med-08', name: 'Diclofenaco Gel', category: 'medicamentos', priceRange: 'RD$200-400', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['dolor', 'muscular', 'topico'],
    dosage: 'Aplicar 3-4 veces al dia en zona afectada', manufacturer: 'MedPharma RD', activeIngredients: ['Diclofenaco sodico 1%'],
    indications: ['Dolor muscular', 'Inflamacion articular', 'Esguinces', 'Contusiones'],
    warnings: ['Solo uso externo', 'No aplicar en heridas abiertas', 'Lavarse las manos despues de aplicar'],
  },

  // VITAMINAS
  {
    id: 'vit-01', name: 'Vitamina C 1000mg', category: 'vitaminas', priceRange: 'RD$200-500', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['inmunidad', 'vitamina', 'defensas'],
    dosage: '1000mg - 1 tableta diaria', manufacturer: 'NutriVida', activeIngredients: ['Acido ascorbico'],
    indications: ['Refuerzo inmunologico', 'Antioxidante', 'Salud de la piel', 'Prevencion de resfriados'],
  },
  {
    id: 'vit-02', name: 'Vitamina D3 5000 IU', category: 'vitaminas', priceRange: 'RD$300-600', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['huesos', 'vitamina', 'calcio'],
    dosage: '5000 IU - 1 capsula diaria', manufacturer: 'NutriVida', activeIngredients: ['Colecalciferol'],
    indications: ['Salud osea', 'Absorcion de calcio', 'Sistema inmune', 'Estado de animo'],
  },
  {
    id: 'vit-03', name: 'Omega 3 Fish Oil', category: 'vitaminas', priceRange: 'RD$350-700', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['corazon', 'omega', 'cerebro'],
    dosage: '1000mg - 1-2 capsulas diarias con comidas', manufacturer: 'NutriVida', activeIngredients: ['EPA', 'DHA'],
    indications: ['Salud cardiovascular', 'Funcion cerebral', 'Trigliceridos', 'Inflamacion'],
  },
  {
    id: 'vit-04', name: 'Multivitaminico Adultos', category: 'vitaminas', priceRange: 'RD$400-800', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['multivitaminico', 'energia', 'salud'],
    dosage: '1 tableta diaria con el desayuno', manufacturer: 'NutriVida', activeIngredients: ['Vitaminas A, B, C, D, E', 'Hierro', 'Zinc', 'Calcio'],
    indications: ['Suplemento nutricional completo', 'Energia y vitalidad', 'Deficiencias vitaminicas'],
  },
  {
    id: 'vit-05', name: 'Zinc 50mg', category: 'vitaminas', priceRange: 'RD$150-350', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['inmunidad', 'zinc', 'defensas'],
    dosage: '50mg - 1 tableta diaria', manufacturer: 'NutriVida', activeIngredients: ['Zinc gluconato'],
    indications: ['Inmunidad', 'Salud de la piel', 'Cicatrizacion', 'Funcion tiroidea'],
  },
  {
    id: 'vit-06', name: 'Magnesio 400mg', category: 'vitaminas', priceRange: 'RD$250-500', image: '/images/pharma-placeholder.jpg', inStock: false, popular: false, tags: ['musculos', 'sueno', 'relajante'],
    dosage: '400mg - 1 tableta diaria preferiblemente en la noche', manufacturer: 'NutriVida', activeIngredients: ['Oxido de magnesio'],
    indications: ['Relajacion muscular', 'Calidad del sueno', 'Calambres', 'Estres'],
  },

  // COSMETICOS
  {
    id: 'cos-01', name: 'Protector Solar SPF 50', category: 'cosmeticos', priceRange: 'RD$400-900', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['sol', 'proteccion', 'piel'],
    dosage: 'Aplicar generosamente 15 min antes de exposicion solar', manufacturer: 'DermaCare',
    indications: ['Proteccion solar UVA/UVB', 'Prevencion de quemaduras', 'Anti-envejecimiento'],
  },
  {
    id: 'cos-02', name: 'Crema Hidratante Facial', category: 'cosmeticos', priceRange: 'RD$300-700', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['hidratante', 'rostro', 'piel'],
    dosage: 'Aplicar manana y noche sobre rostro limpio', manufacturer: 'DermaCare',
    indications: ['Hidratacion profunda', 'Piel seca o mixta', 'Anti-arrugas'],
  },
  {
    id: 'cos-03', name: 'Serum Vitamina C', category: 'cosmeticos', priceRange: 'RD$500-1200', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['serum', 'vitamina c', 'antioxidante'],
    dosage: 'Aplicar 3-5 gotas por la manana antes del protector solar', manufacturer: 'DermaCare',
    indications: ['Luminosidad', 'Manchas oscuras', 'Anti-oxidante', 'Tono uniforme'],
  },
  {
    id: 'cos-04', name: 'Shampoo Anticaida', category: 'cosmeticos', priceRange: 'RD$250-600', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['cabello', 'caida', 'shampoo'],
    dosage: 'Usar 3-4 veces por semana, masajear y dejar actuar 3 minutos', manufacturer: 'DermaCare',
    indications: ['Caida del cabello', 'Fortalecimiento capilar', 'Cuero cabelludo saludable'],
  },
  {
    id: 'cos-05', name: 'Crema Corporal Aloe', category: 'cosmeticos', priceRange: 'RD$200-450', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['aloe', 'cuerpo', 'hidratacion'],
    dosage: 'Aplicar despues del bano sobre piel humeda', manufacturer: 'DermaCare',
    indications: ['Hidratacion corporal', 'Piel sensible', 'Post-solar', 'Suavidad'],
  },

  // BEBES
  {
    id: 'beb-01', name: 'Panales Huggies Talla M', category: 'bebes', priceRange: 'RD$300-600', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['panales', 'bebe', 'huggies'],
    manufacturer: 'Huggies',
    indications: ['Bebes de 5-10 kg', 'Absorcion 12 horas', 'Hipoalergenico'],
  },
  {
    id: 'beb-02', name: 'Formula Infantil NAN', category: 'bebes', priceRange: 'RD$500-1000', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['formula', 'leche', 'bebe'],
    manufacturer: 'Nestle', dosage: 'Segun indicacion del pediatra',
    indications: ['Alimentacion infantil', 'Complemento de lactancia'],
    warnings: ['La leche materna es el mejor alimento', 'Consultar pediatra antes de usar'],
  },
  {
    id: 'beb-03', name: 'Crema para Panal', category: 'bebes', priceRange: 'RD$150-350', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['crema', 'panal', 'rozadura'],
    manufacturer: 'Johnson & Johnson', dosage: 'Aplicar en cada cambio de panal',
    indications: ['Prevencion de rozaduras', 'Piel irritada', 'Barrera protectora'],
  },
  {
    id: 'beb-04', name: 'Toallitas Humedas x80', category: 'bebes', priceRange: 'RD$100-250', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['toallitas', 'limpieza', 'bebe'],
    manufacturer: 'Huggies',
    indications: ['Limpieza suave', 'Sin alcohol', 'Hipoalergenicas'],
  },

  // EQUIPOS
  {
    id: 'equ-01', name: 'Tensiometro Digital', category: 'equipos', priceRange: 'RD$1500-3500', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['tension', 'presion', 'digital'],
    manufacturer: 'Omron',
    indications: ['Medicion de presion arterial', 'Deteccion de arritmias', 'Memoria de lecturas'],
    warnings: ['Calibrar periodicamente', 'No usar en brazo lesionado'],
  },
  {
    id: 'equ-02', name: 'Glucometro + Tiras', category: 'equipos', priceRange: 'RD$1200-2800', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['glucosa', 'diabetes', 'medicion'],
    manufacturer: 'Accu-Chek',
    indications: ['Control de glucosa', 'Diabetes tipo 1 y 2', 'Incluye lancetas y tiras'],
    warnings: ['Usar tiras del mismo fabricante', 'Desechar lancetas usadas correctamente'],
  },
  {
    id: 'equ-03', name: 'Termometro Infrarrojo', category: 'equipos', priceRange: 'RD$800-1800', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['temperatura', 'fiebre', 'infrarrojo'],
    manufacturer: 'Beurer',
    indications: ['Medicion sin contacto', 'Resultado en 1 segundo', 'Memoria 30 lecturas'],
  },
  {
    id: 'equ-04', name: 'Nebulizador Portatil', category: 'equipos', priceRange: 'RD$2000-4500', image: '/images/pharma-placeholder.jpg', inStock: false, popular: false, tags: ['nebulizador', 'respiratorio', 'asma'],
    manufacturer: 'Omron',
    indications: ['Tratamientos respiratorios', 'Asma', 'Bronquitis', 'Incluye mascarillas adulto y nino'],
    warnings: ['Limpiar despues de cada uso', 'Usar solo soluciones indicadas por medico'],
    requiresPrescription: true,
  },

  // PRIMEROS AUXILIOS
  {
    id: 'pri-01', name: 'Kit Primeros Auxilios', category: 'primeros-auxilios', priceRange: 'RD$500-1200', image: '/images/pharma-placeholder.jpg', inStock: true, popular: true, tags: ['kit', 'emergencia', 'primeros auxilios'],
    manufacturer: 'MediKit',
    indications: ['Emergencias basicas', 'Incluye gasas, vendas, alcohol, curitas, tijeras', 'Hogar y vehiculo'],
  },
  {
    id: 'pri-02', name: 'Vendas Elasticas', category: 'primeros-auxilios', priceRange: 'RD$50-150', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['vendas', 'herida', 'elastica'],
    manufacturer: 'MediKit',
    indications: ['Compresion de lesiones', 'Soporte articular', 'Esguinces'],
  },
  {
    id: 'pri-03', name: 'Alcohol Isopropilico', category: 'primeros-auxilios', priceRange: 'RD$80-200', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['alcohol', 'desinfectante', 'limpieza'],
    manufacturer: 'Laboratorio Nacional',
    indications: ['Desinfeccion de heridas', 'Limpieza de superficies', 'Antiseptico'],
    warnings: ['Solo uso externo', 'Inflamable', 'Mantener lejos del fuego'],
  },
  {
    id: 'pri-04', name: 'Curitas Surtidas x100', category: 'primeros-auxilios', priceRange: 'RD$100-250', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['curitas', 'herida', 'adhesivo'],
    manufacturer: 'Band-Aid',
    indications: ['Heridas menores', 'Cortes superficiales', 'Varios tamanos'],
  },
  {
    id: 'pri-05', name: 'Gasas Esteriles', category: 'primeros-auxilios', priceRange: 'RD$60-180', image: '/images/pharma-placeholder.jpg', inStock: true, popular: false, tags: ['gasas', 'esteril', 'herida'],
    manufacturer: 'MediKit',
    indications: ['Cubrir heridas', 'Absorcion de exudado', 'Esteriles individualmente'],
  },
];
