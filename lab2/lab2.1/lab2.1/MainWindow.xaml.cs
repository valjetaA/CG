using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Win32;

namespace lab2._1;
// при переключении на другое приложение продолжает таскать
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window
{
    private readonly BitmapImage transparentBackgroundImage;
    
    public MainWindow()
    {
        InitializeComponent();
        transparentBackgroundImage = new BitmapImage(new Uri("transparentBackground.png", UriKind.Relative));
    } 
    
    private void MenuItem(object sender, RoutedEventArgs e)
    {
        OpenFileDialog openFileDialog = new OpenFileDialog();
        openFileDialog.Filter = "Image Files (*.png;*.jpg;*.bmp)|*.png;*.jpg;*.bmp|All files (*.*)|*.*";

        if (openFileDialog.ShowDialog() == true)
        {
            string selectedImagePath = openFileDialog.FileName;
            DisplayImage(selectedImagePath);
        }
    }
    
    private void DisplayImage(string imagePath)
    {
        try
        {
            BitmapImage bitmap = new BitmapImage(new Uri(imagePath));
            ImageView.Source = bitmap;

            if (System.IO.Path.GetExtension(imagePath).ToLower() == ".png")
            {
                AddTransparentBackground();
            }
            else
            {
                ClearBackground();
            }
        } 
        catch (Exception)
        { }
    }

    private void AddTransparentBackground()
    {
        grid.Background = new ImageBrush(transparentBackgroundImage);
        // this.Background = new ImageBrush(transparentBackgroundImage);
    }

    private void ClearBackground()
    {
        grid.Background = Brushes.Transparent;
        // this.Background = Brushes.White;
    }
    
    private bool isDragging = false;
    private Point startPoint;
    private double startLeft;
    private double startTop;

    private void Grid_MouseLeftButtonDown(object sender, MouseButtonEventArgs e)
    {
        isDragging = true;
        startPoint = e.GetPosition(viewbox);
        var transform = grid.RenderTransform as TranslateTransform;
        if (transform != null)
        {
            startLeft = transform.X;
            startTop = transform.Y;
        }
        else
        {
            transform = new TranslateTransform();
            grid.RenderTransform = transform;
            startLeft = 0;
            startTop = 0;
        }
        grid.CaptureMouse();
    }

    private void Grid_MouseMove(object sender, MouseEventArgs e)
    {
        if (isDragging)
        {
            Point mousePos = e.GetPosition(viewbox);
            double deltaX = mousePos.X - startPoint.X;
            double deltaY = mousePos.Y - startPoint.Y;

            var transform = grid.RenderTransform as TranslateTransform;
            if (transform != null)
            {
                double newX = startLeft + deltaX;
                double newY = startTop + deltaY;

                transform.X = newX;
                transform.Y = newY;
            }
        }
    }
    private void Grid_MouseLeftButtonUp(object sender, MouseButtonEventArgs e)
    {
        if (isDragging)
        {
            isDragging = false;
            grid.ReleaseMouseCapture();
        }
    }
}