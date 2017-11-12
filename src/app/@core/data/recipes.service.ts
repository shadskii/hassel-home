import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Recipe } from './recipe';

@Injectable()
export class RecipesService {

    //TODO: move this to a db
    private recipes = [
        new Recipe('Toffee Squares',
            [
                '2 Cups flour',
                '1 cup brown sugar (packed)',
                '1 teaspoon salt',
                '1 tablespoon vanilla',
                '1 egg', '1 cup butter',
                '8 ounces chocolate',
                'ground walnuts'
            ],
            [
                'Mix flour & butter (etc) in food processor. Pat into lightly buttered 9" x 15" pan.',
                'Bake at 350 degrees. After 15 minutes sprinkle the chocolate and then put back into the oven for 5 more minutes.',
                'Bake 5 minutes more (total 20). As soon as the pan comes out of the oven, spread chocolate.',
                'Sprinkle with walnuts if you want.'
            ],
            'toffee-squares.jpeg'),
        new Recipe('Chocolate Chiffon Pie',
            [
                '1 pkg. (6 ounces) semi-sweet chocolate pieces',
                '1/3 cup sugar',
                '1/3 cup very hot water',
                '1 teaspoon vanilla',
                '4 eggs separated',
                '1 9" baked pie crust (purchased graham cracker or vanilla wafer crust works well)'
            ],
            [
                'Place chocolate, sugar, water & vanilla in blender container. Cover and process until smooth. With blender continuing to run remove feeder cap & slowly add egg yolks. Increase to high speed & process about 60 seconds until thick.',
                'Beat egg whites until stiff peaks form. Carefully fold chocolate mixture into egg whites with wire whisk or rubber spatula. Fold only until combined.',
                'Turn into baked shell. Refrigerate until firm. Makes 8 servings.'
            ],
            'chocolate-chiffon.jpg'),
        new Recipe('Frosting For Brownies',
            [
                '1 Can (14 oz) Borden\'s condensed milk',
                '2 squares Bakers Chocolate',
                '2 tablespoons butter (melted)'
            ],
            [
                'Boil rapidly, stirring until VERY thick, then add: (1 tsp) salt and (1 tsp) vanilla',
                'Spread quickly before it sets.'
            ],
            'frosting.jpg'),
        new Recipe('Chicken Tetrazzini',
            [
                'One 4.5 pound roasting chicken, cut up',
                '3 cups hot water',
                'Salt',
                '1 teaspoon onion salt',
                '½ teaspoon celery salt',
                '½ pound spaghetti',
                '6 tablespoons butter',
                '½ pound mushrooms, sliced',
                '1 tablespoon lemon juice',
                '2 tablespoons flour',
                'Paprika',
                '¼ teaspoon pepper',
                '1/8 teaspoon nutmeg',
                '1 cup heavy cream',
                '2/3 cup grated parmesan cheese',
            ],
            [
                'Day Before In deep kettle: chicken, water, 2 tsp. salt, onion salt, celery salt: simmer covered until fork tender (1 to 1 ¼ hours). Remove chicken and allow to cool. Remove meat from bones in big pieces & cut breasts into thirds. Refrigerate.',
                'From kettle, remove 2 ½ cups broth; to rest of broth add 3 quarts of water & spaghetti. Cook 6 minutes (until tender). Then drain and place spaghetti in 12" x 8" x 2" baking dish.',
                'In Skillet: heat 3 tbs. butter, add mushrooms, sprinkle them with lemon juice and ½ tsp. salt. Saute them until soft but not brown; toss them and their butter with the spaghetti; refrigerate, covered.',
                'In Saucepan: melt 3 tbs. butter and remove from the heat; stir in flour, ¼ tsp. paprika, 1 ½ tsp. salt, pepper & nutmeg. Slowly stir in 2 ½ cups reserved broth (1/4 cup sherry may replace ½ cup broth). Cook sauce, stirring until thickened; then add cream; pour over chicken, Refrigerate all, covered.',
                'Next Day 1 hour before serving - heat oven to 400 degrees F. With fork stir up chicken & sauce, then pour as much sauce as possible over spaghetti while tossing. Now, turn the rest of the chicken mixture into the spaghetti, then sprinkle all with parmesan & paprika. Bake 25 minutes or until hot. Makes 8 servings.'
            ],
            'chicken-tetrazzini.jpg')
    ];

    private recipeArray: any[];

    constructor() { }

    getRecipes(): Observable<Recipe[]> {
        return Observable.of(this.recipes);
    }
}