using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace lab1._1;
//
// /// <summary>
// /// Interaction logic for MainWindow.xaml
// /// </summary>
// ///

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void Grid_MouseUp(object sender, MouseButtonEventArgs e)
    {
        if (sender is Grid grid)
        {
            foreach (var child in grid.Children)
            {
                if (child is Grid gridContainer)
                {
                    Animation(gridContainer);
                }
            }
        }
    }

    private async void Animation(Grid grid)
    {
        double a = 0.1;
        double s = 50;
            // переменную переименовать
        double maxSpeed = Math.Sqrt(2 * s * a);
        double startTopMargin = grid.Margin.Top;
        bool moving = true;

        while (moving)
        {
            //переделать движение, избавиться от true/false
            await MoveWithAcceleration(grid, startTopMargin, s, maxSpeed, a, true);
            await MoveWithAcceleration(grid, startTopMargin, s, maxSpeed, a, false);
        }
    }

    private async Task MoveWithAcceleration(Grid grid, double startTopMargin, double s, double maxSpeed, double a, bool isMovingUp)
    {
        double targetY = isMovingUp ? startTopMargin - s : startTopMargin;
        double initialSpeed = isMovingUp ? maxSpeed : 0;
        double speed = initialSpeed;

        while ((isMovingUp && grid.Margin.Top > targetY && speed > 0) || (!isMovingUp && grid.Margin.Top < targetY && speed < maxSpeed))
        {
            speed = isMovingUp ? Math.Max(0, speed - a) : Math.Min(maxSpeed, speed + a);
            grid.Margin = new Thickness(grid.Margin.Left, grid.Margin.Top + (isMovingUp ? -speed : speed), grid.Margin.Right, grid.Margin.Bottom + (isMovingUp ? speed : -speed));
            await Task.Delay(10);
        }
    }
}
